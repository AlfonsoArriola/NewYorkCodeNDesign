
pet = 0
counter = [1]
  while counter.length > 0

     puts "
  Please Select an Action:
    1. Dog Arrived
    2. Cat Arrived
    3. Animal Complete
    4. Quit "
   number = gets.chomp.to_i  



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

     if number == 1 
      	 me_que = my_queue.enque(1)

      	p  my_queue
     elsif number == 2
     	me_que =  my_queue.enque(1)
        
     elsif number == 3
     	# my_queue.peak
     	# p "clean check"
     	# my_queue.deque

     elsif number == 4
     	exit	
     else 
     	p "No Comprendo, Mi Amigo"
     end
end






  


	










