# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )

Rails.application.config.assets.precompile += %w( main.js animated-headline.js app.js application.js bootstrap.min.js cable.js html5shiv.min.js isotope.pkgd.min.js jquery.counterup.min.js jquery.waypoints.min.js lightbox.js lity.min.js map-white.js owl.carousel.min.js particles.js popper.min.js respond.min.js scrollIt.min.js validator.js wow.min.js)