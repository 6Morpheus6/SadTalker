module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://huggingface.co/spaces/6Morpheus6/SadTalker app",
        ]
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",
          path: "app",
          // xformers: true
          // triton: true
          // sageattention: true
        }
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "uv pip install gradio devicetorch",
          "uv pip install -r requirements.txt"
        ]
      }
    },
    {
      method: "hf.download",
      params: {
        path: "app",
        "_": [ "leonelhs/facexlib", "alignment_WFLW_4HG.pth", "detection_Resnet50_Final.pth", "parsing_parsenet.pth" ],
        "local-dir": "gfpgan/weights"
      }
    },
    {
      method: "hf.download",
      params: {
        path: "app",
        "_": [ "nguyenhoanghuy/GFPGANv1.4.pth", "GFPGANv1.4.pth" ],
        "local-dir": "gfpgan/weights"
      }
    }
  ]
}
