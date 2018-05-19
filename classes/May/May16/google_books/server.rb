require "sinatra"

require 'googlebooks'


# -----------------------
get('/') do 
    erb(:index)
end

post ('/') do

	p params
	
	find_me = params[:query]

  if find_me.length > 0
     books = GoogleBooks.search(find_me)
     first_book = books.first
     @title = first_book.title
     @author = first_book.authors
     @image = first_book.image_link(:zoom => 2)


      erb :index

   else

     redirect '/no_bueno'


 end
end

# --------------------------------------------
get('/order') do 


    erb :order     
end

# -------------------------------
get('/no_bueno') do 
	"what?!" 
end