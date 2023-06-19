(async () =>{
    const db = required("./db");
    console.log('começou!');

    console.log('SELECT * FROM CLIENTES');
    const clientes = await db.selectCustomers();
    console.log(clientes);

    console.log('INSERT INTO CLIENTES');
    const result = await db.insertCustomer({nome:"Josefino", idade: 18, uf:"SP"});
    console.log(result);

    console.log('UPDATE CLIENTES');
    const result2 = await db.updateCustomer(6, {nome: "Mauricio", idade: 25, uf:"sp"});
    console.log(result2);

    console.log('DELETE FROM CLIENTES');
    const result3 = await db.deleteCustomer(7);
    console.log(result3);
}) ();