import axios from "axios";
import Swal from "sweetalert2";
const baseUrl = "https://api.codaa.agency/api/";
const token = localStorage.getItem('token');

class Login {

    postLogin(data) {

        console.log(data);
        axios({

            method: 'post',

            url: `${baseUrl}login`,

            data: data

        }).then(response => {

            localStorage.setItem('token', response.data.token);

            Swal.fire({
                icon: 'success',
                title: 'Oops...',
                text: `You're Loged in successfuly`,
            }).then(response => {
                window.location.href = '/products';
            })

        })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `The given Data was invalid`,
                })
            })
    }

}

class Products {

    getProducts(state) {

        axios({

            method: "get",

            url: `${baseUrl}products`,

        })

            .then(response => {

                state(response.data.data);

            })

            .catch(error => {

                Swal.fire({
                    icon: 'error',
                    title: 'Oops Something Wrong Please Try Again Later...',
                    text: 'Prodcut Edited Sucsseflay',
                });

                setTimeout(() => {
                    window.location.href = "";
                }, 2000);

                return error;
            })

    }

    getSingleProduct(productId, state) {

        return axios({

            method: "get",

            url: `${baseUrl}products/${productId}`,
        })
            .then(response => {

                state(response.data.data);

                return response
            })
            .catch(error => {
                console.log(error, "Nabowy")
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Prodcut Added Sucsseflay',
                });

                return error;
            })

    }

    addProducts(data) {

        axios({

            method: "post",

            url: `${baseUrl}products`,

            data: {

                ...data,

            },

            headers: {

                Authorization: `Bearer ${token}`,

                'Content-Type': 'multipart/form-data'

            }

        })

            .then(response => {

                Swal.fire({
                    icon: 'success',
                    title: 'Oops...',
                    text: 'Prodcut Added Successfully',
                }).then(response => {
                    window.location.href = '/products';
                })

                return response;

            })

            .catch(error => {

                Swal.fire({
                    icon: 'error',
                    title: 'Oops',
                    text: error?.response?.data?.message || 'Please Fill Out The Required Data',
                });

                return error;
            })

    }

    editProducts(data, productId) {

        if (typeof data.image == "string") {

            delete data.image;

        }

        axios({

            method: "put",

            url: `${baseUrl}products/${productId}`,

            data: data,

            headers: {

                Authorization: `Bearer ${token}`,

            }

        })

            .then(response => {

                Swal.fire({
                    icon: 'success',
                    title: 'Oops...',
                    text: 'Prodcut Edited Sucsseflay',
                });

                return response;

            })

            .catch(error => {

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                }).then(er => window.location.href = "/products")

                return error;
            })

    }

    deleteProduct(productId) {

        axios({

            method: "delete",

            url: `${baseUrl}products/${productId}`,

            headers: {

                Authorization: `Bearer ${token}`,

                'Content-Type': 'multipart/form-data'

            }

        })

            .then(response => {

                Swal.fire({
                    icon: 'success',
                    title: 'Oops...',
                    text: 'Prodcut Edited Sucsseflay',
                }).then(response => window.location.reload());
                return response;

            })

            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: error.response.data.message,
                    text: 'Something went wrong!',
                });
                return error;
            })

    }

}

class ProjectsData {

    getProjects(state) {

        axios({

            method: "get",

            url: `${baseUrl}projects`,

        })

            .then(response => {

                state(response.data.data);

            })

            .catch(error => {

                Swal.fire({
                    icon: 'error',
                    title: 'Oops Something Wrong Please Try Again Later...',
                    text: 'Prodcut Edited Sucsseflay',
                });

                setTimeout(() => {
                    window.location.href = "";
                }, 2000);

                return error;
            })

    }

    getSingleProject(projectId, state) {

        axios({

            method: "get",

            url: `${baseUrl}projects/${projectId}`,
        })
            .then(response => {

                state(response.data?.data);

                return response
            })
            .catch(error => {

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Oops Something Wrong Please Try Again Later...',
                });


                return error;
            })

    }

    addProject(data) {

        axios({

            method: "post",

            url: `${baseUrl}projects`,

            data: {

                ...data,

            },

            headers: {

                Authorization: `Bearer ${token}`,

                'Content-Type': 'multipart/form-data'

            }

        })

            .then(response => {

                Swal.fire({
                    icon: 'success',
                    title: 'Oops...',
                    text: 'Project Added Successfully',
                }).then(response => {
                    window.location.href = '/projects';
                })
                return response;

            })

            .catch(error => {

                Swal.fire({
                    icon: 'error',
                    title: 'Oops',
                    text: error?.response?.data?.message || 'Please Fill Out The Required Data',
                });
                return error;
            })

    }

    editProject(data, projectId) {

        if (typeof data.image == "string") {

            delete data.image;

        }

        axios({

            method: "put",

            url: `${baseUrl}projects/${projectId}`,

            data: {

                ...data,
            },

            headers: {

                Authorization: `Bearer ${token}`,

                'Content-Type': 'multipart/json'
            }

        })

            .then(response => {

                Swal.fire({
                    icon: 'success',
                    title: 'Oops...',
                    text: 'Project Edit Successfully',
                }).then(response => {
                    window.location.href = '/projects';
                })
                return response;
            })

            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops',
                    text: error?.response?.data?.message || 'Please Fill Out The Required Data',
                });

                return error;
            })

    }

    deleteProject(productId) {

        axios({

            method: "delete",

            url: `${baseUrl}projects/${productId}`,

            headers: {

                Authorization: `Bearer ${token}`,

                'Content-Type': 'multipart/form-data'

            }

        })

            .then(response => {

                Swal.fire({
                    icon: 'success',
                    title: 'Oops...',
                    text: 'Prodcut Edited Sucsseflay',
                }).then(response => window.location.reload());
                return response;

            })

            .catch(error => {
                console.log(error, "Er")
                Swal.fire({
                    icon: 'error',
                    title: error.response.data.message,
                    text: 'Something went wrong!',
                });
                return error;
            })

    }

}

class Departments {

    getDepartments(state) {

        axios({

            method: "get",

            url: `${baseUrl}departments`,

            headers: {

                Authorization: `Bearer ${token}`,

            }

        })
            .then(response => {

                return state(response.data.data);

            })
            .catch(error => {
                console.log(error)
                return error;
            })

    }

    deleteDepartment(departmentId) {

        axios({

            method: "delete",

            url: `${baseUrl}departments/${departmentId}`,

            headers: {

                Authorization: `Bearer ${token}`,
            }

        })

            .then(response => {

                Swal.fire({
                    icon: 'success',
                    title: 'Oops...',
                    text: 'Prodcut Edited Sucsseflay',
                }).then(response => window.location.reload());
                return response;

            })

            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: error.response.data.message,
                    text: 'Something went wrong!',
                });
                return error;
            })

    }

}

class Services {

    getServices(state) {

        axios({

            method: "get",

            url: `${baseUrl}services`,

            headers: {

                Authorization: `Bearer ${token}`,

            }

        })

            .then(response => {

                state(response.data.data);

            })

            .catch(error => {
                console.log(error);
                return error;
            })

    }

    getSingleServices(servicesId, state) {

        axios({

            method: "get",

            url: `${baseUrl}services/${servicesId}`,
        })
            .then(response => {
                console.log(response);

                state(response);
                return response
            })
            .catch(error => {
                console.log(error);
                return error;

            })

    }

    addServices(data) {

        axios({

            method: "post",

            url: `${baseUrl}services`,

            data: {

                ...data,

            },

            headers: {

                Authorization: `Bearer ${token}`,

                'Content-Type': 'multipart/form-data'

            }

        })

            .then(response => {

                Swal.fire({
                    icon: 'success',
                    title: 'Success...',
                    text: 'Services Added Successfully',
                }).then(response => {
                    window.history.back();
                })
                return response;

            })

            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops',
                    text: error?.response?.data?.message || 'Please Fill Out The Required Data',
                });

                return error;
            })

    }

    editServices(data, projectId) {

        axios({

            method: "put",

            url: `${baseUrl}services/${projectId}`,

            data: {

                ...data,

            },

            headers: {

                Authorization: `Bearer ${token}`,

                'Content-Type': 'multipart/form-data'

            }

        })

            .then(response => {

                return response;
            })

            .catch(error => {

                return error;

            })

    }

}

class Plans {

    getPlan(state, planId) {

        axios({

            method: "get",

            url: `${baseUrl}subscriptions-plans/${planId}`,

        })

            .then(response => {

                state(response.data.data);

            })

            .catch(error => {

                return error;
            })

    }


    editServices(data, planId) {

        axios({

            method: "put",

            url: `${baseUrl}subscriptions-plans/${planId}`,

            data: {

                ...data,

            },

            headers: {

                Authorization: `Bearer ${token}`,

                'Content-Type': 'multipart/form-data'

            }

        })

            .then(response => {

                return response;
            })

            .catch(error => {

                return error;

            })

    }

}


export {
    Products,
    Login,
    ProjectsData,
    Departments,
    Services,
    Plans
}