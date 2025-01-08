{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "shakthipalace";

  buildInputs = with pkgs; [
    hugo
    nodejs
    wrangler
    nodePackages.postcss-cli
  ];
}
