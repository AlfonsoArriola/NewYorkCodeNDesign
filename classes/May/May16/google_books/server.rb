require "sinatra"

require 'googlebooks'


# -----------------------
get('/') do 
    erb(:index)
end

post ('/') do

	p params
	
	find_me = params[:query]

     books = GoogleBooks.search(find_me)
     first_book = books.first
     @title = first_book.title
     @author = first_book.authors
     @image = first_book.image_link(:zoom => 2)

      # "I love #{@test}"

   # books = GoogleBooks.search('The Great Gatsby')
   # first_book = books.first
   # @test = first_book.title
   #  "I love #{@test}"


   erb :index
end

# --------------------------------------------
get('/order') do 


    erb :order     
end

# -------------------------------
get('/no_bueno') do 
	"what?!" 
end