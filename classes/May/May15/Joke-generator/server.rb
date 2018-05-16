require "sinatra"
require "unirest"
require "rubyjokes"


get('/') do 
   its_alive = "Hello World"
   @its_alive = its_alive	
    erb(:index)	
end


get('/surprise') do 
	joke = RubyJoke.new 
	@joke_random = joke.get_single_joke
	erb(:surprise)
end

get('/:type') do
	@haha = safe_or_not_safe(params[:type])

	# erb(:type)
	# "hello world"

	@haha
end


helpers do 
	def safe_or_not_safe(thing)
		if thing == "nerdy"
			joke = RubyJoke.new 
		  joke_nerd = joke.get_joke({limitTo: ['nerdy']})

           @joke_nerd = joke_nerd

			# "nerd"
		elsif thing == "nsfw"
			joke = RubyJoke.new 
			joke_nsfw = joke.get_joke({limitTo: ['explicit']})

			@joke_nsfw = joke_nsfw
			# "perv"
		else
			"Chuck is disappointed in you."

		end
	end
end
