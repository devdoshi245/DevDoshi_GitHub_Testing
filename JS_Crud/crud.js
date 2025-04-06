let alldata = [];
const saveData = () =>{
    let exisistingUser = JSON.parse(localStorage.getItem("userinfo"));
    let len = exisistingUser!=null ? exisistingUser.length+1 : 1;
    
    let id = $("#uid").val();
    let nm = $("#uname").val();
    let age = $("#age").val();
    let email = $("#email").val();
    if(id!=''){
        let res = exisistingUser.map((i) =>{
            if(i.id==id)
            {
                i.name = nm;
                i.age = age;
                i.email = email;
            }
            return i;
        })
        alldata = res;
    }
    else{
        let obj = {
            id : len,
            name : nm,
            age : age,
            email : email
        }
    
        alldata.push(obj);
    }
    
    console.log(alldata);
    localStorage.setItem("userinfo",JSON.stringify(alldata));

    $("#frm").trigger("reset");
    dispData();
}

const dispData = () =>{
    let tr = '';
    let data = JSON.parse(localStorage.getItem("userinfo"));
    data.map((i)=>{
        tr+=`
            <tr>
                <td>${i.id}</td>
                <td>${i.name}</td>
                <td>${i.age}</td>
                <td>${i.email}</td>
                <td><button onclick="editData(${i.id})">Edit</button>
                    <button onclick="delData(${i.id})">Delete</button></td>
            </tr>
        `
    })
    $("#badhodata").html(tr);
}

const delData = (id) =>{
    let data = JSON.parse(localStorage.getItem("userinfo"));
    let res = data.filter((i) =>{
        return i.id!=id;
    })
    j=1;
    let res1 = res.map((i)=>{
        i.id = j++
        return i;
    })
    alldata = res1;
    localStorage.setItem("userinfo",JSON.stringify(res));
    dispData();
}

const editData = (id) =>{
    let data = JSON.parse(localStorage.getItem("userinfo"));
    let res = data.find((i) =>{
        return i.id==id;
    })
    $("#uname").val(res.name);
    $("#age").val(res.age);
    $("#email").val(res.email);
    $("#uid").val(res.id);
}

dispData();
