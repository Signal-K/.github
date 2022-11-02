/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
curl -sS https://starship.rs/install.sh | sh
eval "$(starship init zsh)"
starship preset pure-preset > ~/.config/starship.toml
