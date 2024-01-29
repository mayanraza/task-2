import React from 'react'

import { Container, Row, Col } from 'reactstrap';

import useGetData from '../customs-hooks/useGetData';

import { deleteDoc, doc } from 'firebase/firestore';

import { db } from '../firebase.config';
import { toast } from 'react-toastify';

const User = () => {

    const { data: userData, loading } = useGetData("users")



    const deleteUser = async (id) => {
        await deleteDoc(doc(db, "users", id))
        toast.success("User Deleted Successfully..!!")
    }













    return (
        <section >

            <Container>
                <Row>

                    <Col lg="12" className='m-auto text-center'>
                        <h4 className="fw-bold">Users</h4>
                    </Col>



                    <Col lg="12" className='pt-5'>
                        <table className="table bordered">

                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>







                            <tbody>


                                {
                                    loading ? <h4 className='pt-5 text-center fw-bold'>Loading...!!!</h4>
                                        :


                                        userData?.map((user) => (


                                            <tr key={user.uid}>
                                                <td><img src={user.photoURL} alt="" /></td>
                                                <td>{user.displayName}</td>
                                                <td>{user.email}</td>

                                                <td><button onClick={() => { deleteUser(user.uid) }} className="btn btn-danger">Delete</button></td>


                                            </tr>

                                        ))




                                }


                            </tbody>









                        </table>
                    </Col>


                </Row>
            </Container>



        </section >
    )
}

export default User