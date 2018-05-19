require "sinatra"
require "date"

get ('/') do
    # 'hello world!  Hahaha' 
    erb(:index)
end
# -----------------------------
get ('/contact_us') do
# @contacts = ['President - Steve Jobs',
# "CEO - Tim Cook",
# "CCO - Tom Took",
# "Desiner - John Ives"] 

@contacts = [
{title: 'President', name: 'Steve Jobs'},
{title: "CEO",  name: 'Tim Cook'},
{title: "CCO" ,name:  "Tom Took"},
{title: "Desiner", name: "John Ives"}
] 

	erb(:contact_us)
end
# -----------------------------------
get ('/about_us') do 
	erb(:about_us)
end
# ------------------------------------
get ('/pictures') do 
    erb(:pictures)
end
# -----------------------------------
get ('/order_form') do 
	erb(:order_form)
end
# -----------------------------------------
post ('/place-order') do
	p params
	f_name = params[:first_name]
	redirect "/order-success/#{f_name}"

	# "Thank you, #{f_name}"
end
# ------------------------------------------------
 # time_now = Time.now

# get('/hello/:hey_you') do 
# 	"Hello #{params[:hey_you].capitalize}, Welcome!"
# end


get('/order-success/:hey_you') do 
	@name_to_display = params[:hey_you]
	time = Time.new
	@hour = time
	# @time_now =  params[:time]
	# favorite_dog = params[:favorite_dog]
	# "Hello #{@name_to_display}, Welcome, your favorite dog is #{favorite_dog}!"
	erb(:person_greeting)
  # time_now =Time.now.strftime("%d/%m/%Y %H:%M")


end
