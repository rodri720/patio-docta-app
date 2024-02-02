{
  "builds"; [
    {
      "src": "vite.config.js",
      "use": "@vercel/node",
      "ignore": [
        "carpeta-a-excluir/**",
        "archivo-a-excluir.js"
      ]
    }
  ],
  "routes"; [
    // ... tus configuraciones de ruta
  ]
}
