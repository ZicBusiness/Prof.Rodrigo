$port = 8080
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
try {
    $listener.Start()
    Write-Host "Servidor rodando em http://localhost:$port/"
} catch {
    Write-Error "Falha ao iniciar o servidor: $_"
    exit
}

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $path = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrEmpty($path)) {
            $path = 'index.html'
        }

        # Normalize path separators
        $path = $path -replace '/', '\'
        $fullPath = Join-Path (Get-Location).Path $path

        if (Test-Path $fullPath -PathType Leaf) {
            $extension = [System.IO.Path]::GetExtension($fullPath).ToLower()
            $mimeType = switch ($extension) {
                '.html' { 'text/html; charset=UTF-8' }
                '.css'  { 'text/css; charset=UTF-8' }
                '.js'   { 'application/javascript; charset=UTF-8' }
                '.svg'  { 'image/svg+xml' }
                '.png'  { 'image/png' }
                '.jpg'  { 'image/jpeg' }
                '.jpeg' { 'image/jpeg' }
                '.gif'  { 'image/gif' }
                '.ico'  { 'image/x-icon' }
                default { 'application/octet-stream' }
            }
            $response.ContentType = $mimeType

            $content = [System.IO.File]::ReadAllBytes($fullPath)
            $response.ContentLength64 = $content.Length
            $response.OutputStream.Write($content, 0, $content.Length)
        } else {
            $response.StatusCode = 404
        }
        $response.Close()
    } catch {
        # ignore context errors to keep server running
    }
}
