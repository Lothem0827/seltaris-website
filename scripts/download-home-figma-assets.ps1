$dir = "c:\Users\CARL\seltaris-website\seltaris-website\public\images\home"
New-Item -ItemType Directory -Force -Path $dir | Out-Null

# Figma file jXLN5JDBelPyYLqSJE6rmw — homepage frame 4289:5544 (refreshed 2026-05-20)
$files = @{
  "hero-background.png" = "https://www.figma.com/api/mcp/asset/89df07e2-9914-4fb8-be87-d7497872556f"       # 4304:6164
  "laptop.png" = "https://www.figma.com/api/mcp/asset/bfda8fe8-bd32-40cd-b69b-da5e79accfa3"                # 4304:6216
  "services-hero.png" = "https://www.figma.com/api/mcp/asset/ea455640-0497-4bf5-9178-87f3bdfbd7a8"          # 4289:11063
  "service-icon-address.png" = "https://www.figma.com/api/mcp/asset/85c56357-56a4-4066-8a4f-86fb549c7680"   # 4289:11066
  "service-icon-email.png" = "https://www.figma.com/api/mcp/asset/dc9aab94-4589-4970-bfe9-3aebb93840ac"     # 4289:11069
  "service-icon-phone.png" = "https://www.figma.com/api/mcp/asset/85251b9b-7c0a-44aa-a178-7a4aa107ce43"     # 4289:11072
  "service-icon-geocode.png" = "https://www.figma.com/api/mcp/asset/9c13ae5c-80f0-4169-b2e6-724526ada849"   # 4289:11075
  "feature-slide-1.png" = "https://www.figma.com/api/mcp/asset/f9fe6517-fe04-44c4-86c1-1f8cd39def04"        # 4305:5799
  "feature-slide-2.png" = "https://www.figma.com/api/mcp/asset/82823f2a-6559-4206-b5a6-579519d63d04"        # 4305:5803
  "feature-slide-3.png" = "https://www.figma.com/api/mcp/asset/71d80e36-fb63-40ec-8a6c-aa58fbaeddc1"        # 4305:5818
  "human-touch-showcase.png" = "https://www.figma.com/api/mcp/asset/fc865138-d559-4241-9f7f-b3956c54004e"     # 4304:14555
  "human-touch-side.png" = "https://www.figma.com/api/mcp/asset/d60de6ff-f188-4157-a6b0-995765e7e0b7"        # 4305:5790
  # Tab card images (enhance-existing-data, quality-dataset, unverified-address-enhancement) are SVGs in repo
  "altraservice-hero.png" = "https://www.figma.com/api/mcp/asset/fffc72a8-8edb-4383-abf2-bd3cf28e3f8f"        # 4305:5632
  "altraservice-side.png" = "https://www.figma.com/api/mcp/asset/0aaa0166-1ea1-46b7-b71f-b9dafc79e38e"        # 4305:6772
  "altraservice-1.png" = "https://www.figma.com/api/mcp/asset/c909d181-f486-417e-b110-015163d9d63a"           # 4305:6787
  "altraservice-2.png" = "https://www.figma.com/api/mcp/asset/53828bd0-223b-402c-823d-76bb80de91b3"           # 4305:6793
  "altraservice-3.png" = "https://www.figma.com/api/mcp/asset/b5437c69-f6a6-4066-9be4-27f57152eb11"           # 4305:6799
  "platform-showcase.png" = "https://www.figma.com/api/mcp/asset/e866fede-5523-489f-9023-712682e46430"       # 4305:6465
  "security-side.png" = "https://www.figma.com/api/mcp/asset/c402c6ab-c334-4d27-933a-b7b9d3dcc28a"           # 4305:6817
  "security-1.png" = "https://www.figma.com/api/mcp/asset/92190290-9141-4fd0-9804-1938212d5366"             # 4305:9097
  "security-2.png" = "https://www.figma.com/api/mcp/asset/2c46e850-7847-4378-90ab-d1fb1b63c350"             # 4305:9100
  "security-3.png" = "https://www.figma.com/api/mcp/asset/d3bf3fb5-a349-4b81-a624-9f8aebf4ef32"             # 4305:9103
  "workflow-showcase.png" = "https://www.figma.com/api/mcp/asset/490c334c-f878-41e1-a6a8-65b0754e5b34"       # 4305:8433
  "health-side.png" = "https://www.figma.com/api/mcp/asset/8d2cb782-07a2-44f5-8084-dafba8038df8"            # 4305:8673
  # health-1/2/3 tab card images are SVGs in repo
  "pricing-icon-repaired.png" = "https://www.figma.com/api/mcp/asset/de984d0d-2e5f-44c7-82e8-a274c182db0e"   # 4306:9697
  "pricing-icon-health.png" = "https://www.figma.com/api/mcp/asset/6ef6c1c2-6857-44bd-bfaa-0865d56fcbd7"     # 4306:9700
  "learn-more-arrow.png" = "https://www.figma.com/api/mcp/asset/54e572d5-9a0b-4735-bfbd-89a648a2bf14"       # 4295:16367
  "check-icon-alt.png" = "https://www.figma.com/api/mcp/asset/1e23fbfd-d0b5-4956-8114-c91779678c80"         # 4295:16370
}

foreach ($name in $files.Keys) {
  $out = Join-Path $dir $name
  curl.exe -sL -o $out $files[$name]
  $size = (Get-Item $out).Length
  Write-Host "$name : $size bytes"
}
