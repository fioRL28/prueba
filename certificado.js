function doGet(e) {
    var sheet = SpreadsheetApp.openById("1ABC123XYZ456").getActiveSheet();
    var data = sheet.getDataRange().getValues();
    
    var json = [];
    for (var i = 1; i < data.length; i++) {
      json.push({
        "Codigo": data[i][0],
        "nombre": data[i][1],
        "curso": data[i][2],
        "fecha": data[i][3]
      });
    }
  
    return ContentService.createTextOutput(JSON.stringify(json)).setMimeType(ContentService.MimeType.JSON);
  }
  