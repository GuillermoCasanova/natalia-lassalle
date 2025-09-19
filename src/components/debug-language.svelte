<script>
import { currentLanguage } from "$lib/stores/language";
import { page } from "$app/stores";

// Debug info
$: debugInfo = {
  storeLanguage: $currentLanguage,
  urlLanguage: $page.url.searchParams.get("lang") || "none",
  fullUrl: $page.url.toString(),
  timestamp: new Date().toLocaleTimeString(),
};

// Log to console whenever language changes
$: console.log("=== CLIENT DEBUG ===", debugInfo);
</script>

<div class="debug-box">
  <h3>Language Debug Info</h3>
  <div class="debug-item">
    <strong>Store Language:</strong>
    {$currentLanguage}
  </div>
  <div class="debug-item">
    <strong>URL Language:</strong>
    {$page.url.searchParams.get("lang") || "none"}
  </div>
  <div class="debug-item">
    <strong>Full URL:</strong>
    {$page.url.toString()}
  </div>
  <div class="debug-item">
    <strong>Last Updated:</strong>
    {new Date().toLocaleTimeString()}
  </div>
</div>

<style>
.debug-box {
  position: fixed;
  top: 10px;
  right: 10px;
  background: #0066ff;
  color: #fff;
  left: 0;
  right: auto;
  padding: 15px;
  border-radius: 8px;
  font-family: monospace;
  font-size: 14px;
  z-index: 1000;
  max-width: 350px;
  box-shadow: 0 4px 12px rgba(0, 102, 255, 0.5);
  border: 2px solid #0044cc;
  z-index: 1000;
}

.debug-item {
  margin-bottom: 8px;
  word-break: break-all;
}

h3 {
  margin: 0 0 10px 0;
  color: #ffff00;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
}
</style>
