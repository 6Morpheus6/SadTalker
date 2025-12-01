module.exports = {
  requires: {
    bundle: "ai",
  },
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
      method: "shell.run",
      params: {
        message: "conda update -y -c conda-forge huggingface_hub"
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
          "uv pip install -r requirements.txt",
          "uv pip install gradio==5.50.0 devicetorch basicsr-fixed"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: "hf download leonelhs/facexlib alignment_WFLW_4HG.pth detection_Resnet50_Final.pth parsing_parsenet.pth --local-dir gfpgan/weights && dir"
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: "hf download nguyenhoanghuy/GFPGANv1.4.pth GFPGANv1.4.pth --local-dir gfpgan/weights"
      }
    }
  ]
}
