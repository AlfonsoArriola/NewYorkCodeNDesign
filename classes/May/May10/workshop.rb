# puts "give me a number, please."
# number = gets
# number = number.chomp.to_i
#   dots = "."
# 1.upto(number){|i| puts dots * i }
# number.downto(1) { |i| puts dots * i}

# _____________ Queue ____________________

class Queue
	def initialize()
		@array =[]
	end
	 def peak
     	#returns the next element, but doesn't remove it
     	@array[0]
     end
	 def enque(num)
		#adds an element to the queue
		@array.push(num)
	 end
	 def deque
		#removes and returns the next element as an element to the queue
		@array.shift
	 end
	 def empty?
		#returns true if the queue is empty, false other wise
		 if @array.length == 0
		    true
		 else
		 	false
		 end
	 end
end



my_queue = Queue.new
my_queue.enque(10)
my_queue.enque(20)
my_queue.enque(30)

  


   puts my_queue.deque() 
   # puts my_queue.deque() 
   puts my_queue.deque() 
   puts my_queue.empty?



  

 





