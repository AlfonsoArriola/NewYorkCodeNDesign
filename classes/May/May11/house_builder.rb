puts"
Please Enter The Number of Rooms:
"
num_of_rooms = gets.chomp.to_i

class List_of_rooms
	def initialize(num_of_rooms)
		@num_of_rooms = num_of_rooms
	end
end


rooms_for_the_house = []
# .........
   if num_of_rooms > 0
	   
       1.upto(num_of_rooms) {
        |i| puts"
Please Enter the dimensions for room #{i}:
 "
puts "width: "
width = gets.chomp.to_i 
puts "height: "
height = gets.chomp.to_i
        "
        "
class Room_maker 
	attr_accessor :height, :width
	def initialize(height, width)
		@height = height
		@width = width		
	end
	def gimmie_area
		@width * @height
	end
end

new_room = Room_maker.new(height,width)
  rooms_for_the_house.push(new_room.gimmie_area)
  
   # ________________________
         }       
    else
   	p "newp"
	end

class Make_me_a_Home 
	attr_accessor
def initialize(rooms_for_the_house)	
	@rooms_for_the_house = rooms_for_the_house
	
end

def grand_total
    house_area = 0
	# rooms_for_the_house.each do |x|	
	# end
	@rooms_for_the_house.each do |x|

		house_area += x
	
	end
end
end

all_done = Make_me_a_Home.new(rooms_for_the_house)

# p "
# The total area of the house is: #{all_done.grand_total}
# "

p all_done.grand_total
























