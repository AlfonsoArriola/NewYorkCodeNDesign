
require "chuck_norris"

class ChuckJokes  

	def help
		
	end

	def get_jokes_by_id(id)
		bug_joke = ChuckNorris::JokeFinder.find_joke(id)
		bug_joke.joke
	end

	def replace_name(f_name, l_name)
		joke = ChuckNorris::JokeFinder.get_joke(first_name: f_name , last_name: l_name)
		joke.joke
	end

	def random
		joke = ChuckNorris::JokeFinder.get_joke 
		joke.joke 
	end
end

 make_me_laugh = ChuckJokes.new

 p make_me_laugh.replace_name("rich", "guy")







      
