import React from "react";
import {useRouter} from "next/router";
import Layout from "../../components/Layout";
import {useQuery, gql} from "@apollo/client";


const OBTENER_CLIENTE = gql`
    query obtenerCliente($id:ID!){
        obtenerCliente(id:$id){
            nombre
            apellido
            email
        }
    }
`;

const EditarCliente = () => {
    const router = useRouter();
    const {query:{pid}} = router;

    const {data, loading, error} = useQuery(OBTENER_CLIENTE, {
        variables: {
            id:pid
        }
    });

    console.log(data);
    console.log(loading)

    return (
        <Layout>
            <h1 className="text-2xl text-gray-800 front-light">Editar Cliente</h1>
            <div className="flex justify-center mt-5">
                <div className="w-full max-w-lg">
                    <form
                        /*onSubmit={formik.handleSubmit}*/
                        className="bg-white shadow-md px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bolg mb-2" htmlFor="nombre">
                                Nombre
                            </label>
                            <input
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="nombre"
                                placeholder="Nombre"
                                /*value={formik.values.nombre}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}*/
                            />
                        </div>
                       {/* {formik.touched.nombre && formik.errors.nombre && (
                            <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                <p className="font-bold">Error</p>
                                <p>{formik.errors.nombre}</p>
                            </div>
                        )}*/}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bolg mb-2" htmlFor="apellido">
                                Apellido
                            </label>
                            <input
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="apellido"
                                placeholder="Apellido"
                               /* value={formik.values.apellido}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}*/
                            />
                        </div>
                        {/*{formik.touched.apellido && formik.errors.apellido && (
                            <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                <p className="font-bold">Error</p>
                                <p>{formik.errors.apellido}</p>
                            </div>
                        )}*/}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bolg mb-2" htmlFor="empresa">
                                Empresa Cliente
                            </label>
                            <input
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="empresa"
                                placeholder="Empresa Cliente"
                               /* value={formik.values.empresa}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}*/
                            />
                        </div>
                        {/*{formik.touched.empresa && formik.errors.empresa && (
                            <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                <p className="font-bold">Error</p>
                                <p>{formik.errors.empresa}</p>
                            </div>
                        )}*/}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bolg mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                placeholder="Email"
                               /* value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}*/
                            />
                        </div>
                        {/*{formik.touched.email && formik.errors.email && (
                            <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                <p className="font-bold">Error</p>
                                <p>{formik.errors.email}</p>
                            </div>
                        )}*/}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bolg mb-2" htmlFor="telefono">
                                Telefono
                            </label>
                            <input
                                type="tel"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="telefono"
                                placeholder="Telefono"
                               /* value={formik.values.telefono}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}*/
                            />
                        </div>
                        <input
                            type="submit"
                            className="bg-gray-600 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900"
                            value="Actualizar Cliente"
                        />

                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default EditarCliente;