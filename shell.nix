{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "shakthipalace";

  buildInputs = with pkgs; [
    go
    hugo
    nodejs
    wrangler
    nodePackages.postcss-cli
  ];
}
