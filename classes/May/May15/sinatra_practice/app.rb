require "sinatra"

get ('/') do
    # 'hello world!  Hahaha' 
    erb(:index)
end

get ('/contact_us') do 
	erb(:contact_us)
end

get ('/about_us') do 
	erb(:about_us)
end

get ('/pictures') do 
	erb(:pictures)
end

 # time_now = Time.now

# get('/hello/:hey_you') do 
# 	"Hello #{params[:hey_you].capitalize}, Welcome!"
# end


get('/hello/:hey_you') do 
	@name_to_display = params[:hey_you]
	# @time_now =  params[:time]
	# favorite_dog = params[:favorite_dog]
	# "Hello #{@name_to_display}, Welcome, your favorite dog is #{favorite_dog}!"
	erb(:person_greeting)


  # time_now =Time.now.strftime("%d/%m/%Y %H:%M")


end
