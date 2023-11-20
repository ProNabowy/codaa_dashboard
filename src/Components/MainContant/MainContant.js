
import { lazy } from 'react';
import BreadcrumbNav from '../../layouts/BreadcrumbNav/BreadcrumbNav';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import Auth from '../Auth/Auth';

const Login = lazy(() => import('../../pages/Login'));
const ProductsPage = lazy(() => import('../../pages/ProductsPage/Products'));
const Projects = lazy(() => import('../../pages/Projects/Projects'));
const AddProduct = lazy(() => import('../../pages/ProductsPage/components/AddProduct/AddProduct.js'));
const EditProject = lazy(() => import('../../pages/Projects/components/EditProject/EditProject'));
const ProgrammingDepartment = lazy(() => import('../../pages/ProgrammingDepartment/ProgrammingDepartment'));
const DMDepartment = lazy(() => import('../../pages/DMDepartment/DMDepartment'));
const DesignDepartment = lazy(() => import('../../pages/DesignDepartment/DesignDepartment'));
const Package = lazy(() => import('../../pages/ProductsPage//components/Package/Package.js'));
const EditProduct = lazy(() => import('../../pages/ProductsPage/components/EditProduct/EditProduct'));
const AddProject = lazy(() => import('../../pages/Projects/components/AddProject/AddProject'));
const AddProgramingServices = lazy(() => import('../../pages/ProgrammingDepartment/components/AddProgramingServices'));
const ViewProgramingServices = lazy(() => import('../../pages/ProgrammingDepartment/components/ViewProgramingServices'));
const ViewDMServices = lazy(() => import('../../pages/DMDepartment/components/ViewDMServices'));
const AddDMServices = lazy(() => import('../../pages/DMDepartment/components/AddDMServices'));
const ViewDesignServices = lazy(() => import('../../pages/DesignDepartment/components/ViewDesignServices'));
const AddDesignServices = lazy(() => import('../../pages/DesignDepartment/components/AddDesignServices'));



export default function MainContant({ isExpanded }) {

    return (
        <div className={`p-5 px-10 ${isExpanded ? "lg:ms-[260px]" : "lg:ms-[80px]"}`} style={{ transition: "0.5s" }}>

            <div className='container'>

                <BreadcrumbNav></BreadcrumbNav>

                <Suspense fallback={'Loading'}>

                    <Routes>

                        <Route path='login' element={
                            localStorage.getItem('token')
                                ?
                                <Navigate to={'/products'} /> :
                                <Login />
                        } />

                        <Route path='products' element={

                            <Auth>

                                <ProductsPage />

                            </Auth>

                        }></Route>

                        <Route path='products/addProduct' element={

                            <Auth>

                                <AddProduct />

                            </Auth>

                        }></Route>

                        <Route path='products/editProduct' element={

                            <Auth>

                                <EditProduct />

                            </Auth>

                        }></Route>

                        {/* Doesn't Finish */}
                        <Route path='products/package' element={

                            <Auth>

                                <Package />
                            </Auth>

                        }></Route>
                        {/* Doesn't Finish */}
                        <Route path='products/add-package' element={

                            <Auth>

                                <Package />

                            </Auth>
                        }></Route>

                        <Route path='projects' element={

                            <Auth>

                                <Projects />

                            </Auth>

                        }></Route>

                        <Route path='projects/edit-project' element={

                            <Auth>

                                <EditProject isEditPage={true} />
                            </Auth>

                        }></Route>

                        <Route path='projects/add-project' element={

                            <Auth>

                                <AddProject />

                            </Auth>

                        }></Route>

                        <Route path='services/programing-department' element={

                            <Auth>

                                <ProgrammingDepartment />

                            </Auth>

                        }></Route>

                        <Route path='services/programing-department/view-services' element={

                            <Auth>

                                <ViewProgramingServices />

                            </Auth>

                        }></Route>

                        <Route path='services/programing-department/add-services' element={

                            <Auth>

                                <AddProgramingServices />

                            </Auth>

                        }></Route>

                        <Route path='services/dm-department' element={

                            <Auth>

                                <DMDepartment />

                            </Auth>

                        }></Route>

                        <Route path='services/dm-department/view-services' element={

                            <Auth>

                                <ViewDMServices />

                            </Auth>

                        }></Route>

                        <Route path='services/dm-department/add-services' element={

                            <Auth>

                                <AddDMServices />

                            </Auth>

                        }></Route>

                        <Route path='services/design-department' element={

                            <Auth>

                                <DesignDepartment />

                            </Auth>

                        }></Route>

                        <Route path='services/design-department/view-services' element={

                            <Auth>

                                <ViewDesignServices />

                            </Auth>

                        }></Route>

                        <Route path='services/design-department/add-services' element={

                            <Auth>

                                <AddDesignServices />

                            </Auth>

                        }></Route>

                    </Routes>

                </Suspense>

            </div>

        </div>
    )
}
