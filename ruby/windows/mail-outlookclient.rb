require 'rubygems'
require 'win32ole'
require 'ap'
require 'pp'

#Create an instance of the Outlook Application object:
outlook = WIN32OLE.new('Outlook.Application')
# To create a new item in Outlook, call the Application object's CreateItem method and pass it a numeric value that represents the type of item to create. Valid arguments include:
# olMailItem = 0
# olAppointmentItem = 1
# olContactItem = 2
# olTaskItem = 3
# olJournalItem = 4
# olNoteItem = 5
# olPostItem = 6

message = outlook.CreateItem(0)
message.Subject = 'Hi'
message.Body = 'Have a nice day.'

#Define the recipient by setting the To property...
#message.To = 'ted.williams@redsox.com'

message.Recipients.Add 'prasanna.bhat@in.bosch.com'

#The second argument, 1, indicates that this is an attached file, rather than a link to the original file.
#message.Attachments.Add('c:\my_folder\my_file.txt', 1)

#You can save the unsent message in your Outbox by calling the Save method...
message.Save

message.Send