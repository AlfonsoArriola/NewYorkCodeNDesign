require "sinatra"
require "unirest"
require "rubyjokes"

joke = RubyJoke.new 
# puts joke.get_single_joke

get('/') do 	
    erb(:index)	
end

get('/surprise') do 
	erb(:surprise)
end

get('/:type') do
	@joke = params
end

get('/:nerdy') do
	
	
	
end