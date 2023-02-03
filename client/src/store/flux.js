const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			api: "https://3001-mjrod23-backend2-w1zlfjlaoef.ws-us85.gitpod.io/"
		},
		actions: {
			sign_up: (email, password) => {
				const store = getStore();

                fetch(`${store.api}/api/signup`,{
                    method:"POST", 
                    body: JSON.stringify({
                        email:email,
                        password:password
                    }),
                    headers:{
                        "Content-type": "application/json",
						"Access-Control-Allow-Origin": "*"
                    }
                })
                    .then(response=>{
                        if (response.ok){
                            return response.json();
                        }
                    })
                    .then(data=>{
                        localStorage.setItem("token", data.token)
                    })
                    .catch(error=> console.log("error during signup", error))

            },
            login: (email, password) => {
				const store = getStore();

                fetch(`${store.api}/api/login`,{
                    method:"POST", 
                    body: JSON.stringify({
                        email:email,
                        password:password
                    }),
                    headers:{
                        "Content-type": "application/json",
						"Access-Control-Allow-Origin": "*"
                    }
                })
                    .then(response=>{
                        if (response.ok){
                            return response.json();
                        }
                    })
                    .then(data=>{
                        localStorage.setItem("token", data.token)
                    })
                    .catch(error=> console.log("error during login", error))

            },
            
        }
    }
};

export default getState;