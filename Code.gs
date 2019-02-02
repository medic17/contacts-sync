function main() {
  var id = '<Your Sheet id here>'; // ID of the projects spreadsheet
  var spreadSheet = SpreadsheetApp.openById(id); // Initilize spreadsheet
  var sheet1 = spreadSheet.getSheetByName('Sheet1'); // Get sheet instence
  
  var range = sheet1.getDataRange(); // Get all cells with data
  var values = range.getValues(); // Get values 
  var mainGroup = ContactsApp.getContactGroup("System Group: My Contacts"); // Contacts not in a specific group are stored here 
  
  
  // Loop through all rows except title row
  for (var i = 1; i < values.length; i++) {
    
    // Unpack 2D array row by row
    var firstName, lastName, address, tel, contactPersion, yeshiva;
    [firstName, lastName, address, tel, contactPersion, yeshiva] = values[i];
    
    // Check for duplicate numbers. If they already exist the script will not add them
    if (inspectContacts(tel) == 'That number allready existes') {
      Logger.log('Duplacite found!')
    } else {
      
      // Add contact
      var contact = ContactsApp.createContact(firstName, lastName, null); // null is for email argument that is expected by the function
      contact.addAddress(ContactsApp.Field.HOME_ADDRESS, address);
      contact.addPhone(ContactsApp.Field.MOBILE_PHONE, tel);
      mainGroup.addContact(contact);
    }
  }
}

// This function inspects contacts for duplacites
function inspectContacts(tel) {
  // Variable setup
  var contacts = ContactsApp.getContacts();
  var mainGroup = ContactsApp.getContactGroup("System Group: My Contacts"); // Contacts not in a specific group are stored here
  
  for (var j = 0; j < contacts.length; j++) {
    // Catch contact with no phone number
    try {    
      var phone = contacts[j].getPhones()[0].getPhoneNumber();
      if (tel == phone) {
        var log = 'That number allready existes';
        return  log;
      }
    } 
    catch (err) {
      if (err.name == 'TypeError') {
        //Logger.log(err.name)
        continue;
      }
    }
  }
} 
