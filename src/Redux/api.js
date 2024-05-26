import axios from "axios";
const url="http://localhost:5000"
export const registraionUser=async(payload)=>{
    try {
        const {data}=await axios.post(`${url}/Registration`,payload);
        return data;
    } catch (error) {
        return error
    }
}

export const registraionUserBackend=async(payload)=>{
    try {
        const {data}=await axios.post(`${url}/login`,payload);
        return data;
    } catch (error) {
        return error
    }
}


export const UpdatePassword=async(payload)=>{
    try {
        const {data}=await axios.post(`${url}/Update-Password`,payload);
        return data;
    } catch (error) {
        return error
    }
}



export const GetSingleUser=async(id)=>{
    try {
        const {data}=await axios.get(`${url}/User/get/${id}`);
        return data;
    } catch (error) {
        return error
    }
}


export const EditMyAccountBackend=async(payload)=>{
    try {
        const {data}=await axios.post(`${url}/Update-Profile`,payload);
        return data;
    } catch (error) {
        return error
    }
}


export const AddNewListBackend=async(payload)=>{
    try {
        const {data}=await axios.post(`${url}/servicelist/post`,payload);
        return data;
    } catch (error) {
        return error
    }
}



export const UpdatePendingServicecs=async(payload,id)=>{
    try {
        const {data}=await axios.post(`${url}/UpdatePen/Update/${id}`,payload);
        return data;
    } catch (error) {
        return error
    }
}


export const getAllFeedbackUsers=async(name=undefined,Country=undefined,Proffession=undefined)=>{
    try {
        console.log("name",name,"country",Country,"Proffesion",Proffession);
        const {data}=await axios.get(`${url}/feedback/get`,{
            params: {
                name: name,
                Country: Country,
                Proffession: Proffession
            }
        });
        return data;
    } catch (error) {
        return error
    }
}

export const UpdateMyEarningBackend=async(payload)=>{
    try {
        const {data}=await axios.post(`${url}/Post/UserEarning`,payload);
        return data;
    } catch (error) {
        return error
    }
}
export const UpdateUsersEarning=async(payload)=>{
    try {
        console.log("apipayload",payload)
        const {data}=await axios.post(`${url}/Update/UserEarning`,payload);
        return data;
    } catch (error) {
        return error
    }
}

export const getServiceList=async(name=undefined,Country=undefined,Proffession=undefined)=>{
    try {
        const {data}=await axios.get(`${url}/servicelist/get`,{
            params: {
                name: name,
                Country: Country,
                Proffession: Proffession
            }
        });
        return data;
    } catch (error) {
        return error
    }
}
// 

export const getUsersAllEarnings=async(name=undefined,Country=undefined,Proffession=undefined)=>{
    try {
        const {data}=await axios.get(`${url}/Get/UserEarning`,{
            params: {
                name: name,
                Country: Country,
                Proffession: Proffession
            }
        });
        return data;
    } catch (error) {
        return error
    }
}


export const getIndividServiceList=async(id)=>{
    try {
        const {data}=await axios.get(`${url}/servicelist/get/${id}`);
        return data;
    } catch (error) {
        return error
    }
}

export const getUsersServiceList=async(id)=>{
    try {
        const {data}=await axios.get(`${url}/User/servicelist/get/${id}`);
        return data;
    } catch (error) {
        return error
    }
}

export const getUsersFeedbacks=async(id)=>{
    try {
        const {data}=await axios.get(`${url}/feedback/get/${id}`);
        return data;
    } catch (error) {
        return error
    }
}

export const getUsersPendingReq=async(id)=>{
    try {
        const {data}=await axios.get(`${url}/UpdatePen/get/${id}`);
        return data;
    } catch (error) {
        return error
    }
}

export const getUsersEarning=async(id)=>{
    try {
        const {data}=await axios.get(`${url}/Get/Indi/UserEarning/${id}`);
        return data;
    } catch (error) {
        return error
    }
}

export const getAllUser=async(id)=>{
    try {
        const {data}=await axios.get(`${url}/Registration/getAll`);
        return data;
    } catch (error) {
        return error
    }
}

export const UpdateMyPaymentDetails=async(payload)=>{
    try {
        const {data}=await axios.post(`${url}/update/paypost`,payload);
        return data;
    } catch (error) {
        return error
    }
}

export const GetAllPaymenyDetailBackend=async(name=undefined,Country=undefined,Proffession=undefined)=>{
    try {
        const {data}=await axios.get(`${url}/payget`,{
            params: {
                name: name,
                Country: Country,
                Proffession: Proffession
            }
        });
         
      console.log("data",data)
        
        return data;

    } catch (error) {
        return error
    }
}




export const GetMyPaymentDetails=async(id)=>{
    try {
        const {data}=await axios.get(`${url}/User/payget/${id}`);
        return data;
    } catch (error) {
        return error
    }
}

export const PostSupportQuery=async(payload)=>{
    try {
        const {data}=await axios.post(`${url}/Supportpost`,payload);
        return data;
    } catch (error) {
        return error
    }
}

export const GetSupportQuery=async()=>{
    try {
        const {data}=await axios.get(`${url}/Supportget`);
        return data;
    } catch (error) {
        return error
    }
}
export const GetIndSupportQuery=async(id)=>{
    try {
        const {data}=await axios.get(`${url}/Supportget/${id}`);
        return data;
    } catch (error) {
        return error
    }
}

// "/Update-Profile"