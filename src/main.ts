const menuItemGenerator = () => {
  // 雛形
  // <MenuItem value={"hokkaido"}>北海道</MenuItem>;
  const dataSS = SpreadsheetApp.openById(
    "1fAWPm20Jb8UiUANzjNJ8JvHObCQzXJOmTc1n0FqyGtw"
  ).getSheetByName("main");
  const lastRow: number = dataSS.getLastRow();
  let i: number;
  for (i = 2; i <= lastRow; i++) {
    let display: any = dataSS.getRange(i, 1).getValue();
    let valueProp: any = dataSS.getRange(i, 2).getValue();
    dataSS
      .getRange(i, 3)
      .setValue(`<MenuItem value={"${valueProp}"}>${display}</MenuItem>`);
  }
};
