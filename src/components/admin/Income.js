import React from 'react'
import { InputGroup, SplitButton, Dropdown } from 'react-bootstrap'
import Navadmin from './Navadmin'

export default function Income() {
    const DataCustomer =[
        {
            no: '1',
            users: 'Marfud',
            bukti: 'bca.jpg',
            active: '26/hari',
            statU: 'Active',
            statP: 'Approve'
        },{
            no: '2',
            users: 'Haris Rahman',
            bukti: 'bca.jpg',
            active: '26/hari',
            statU: 'Active',
            statP: 'Approve'
        },{
            no: '3',
            users: 'Amin Subagyo',
            bukti: 'permata.jpg',
            active: '15/hari',
            statU: 'Active',
            statP: 'Approve'
        },{
            no: '4',
            users: 'Heru Zulkarnain',
            bukti: 'permata.jpg',
            active: '0/hari',
            statU: 'Not Active',
            statP: 'Pending'
        },{
            no: '5',
            users: 'Aziz Without Pants',
            bukti: 'bri.jpg',
            active: '0/hari',
            statU: 'Not Active',
            statP: 'Pending'
        },{
            no: '6',
            users: 'Sugeng Star',
            bukti: 'bri.jpg',
            active: '0/hari',
            statU: 'Not Active',
            statP: 'Pending'
        },
    ]
  return (
    <div>
        <Navadmin/>
        <div>
            <table border='2' className='table table-bordered border-2 border-dark'>
                <tr className='text-dark text-center bg-dark bg-opacity-25'>
                    <th className='border-dark border-2'>No</th>
                    <th className='border-dark border-2'>Name</th>
                    <th className='border-dark border-2'>Address</th>
                    <th className='border-dark border-2'>Post Code</th>
                    <th className='border-dark border-2'>Income</th>
                    <th className='border-dark border-2'>Status</th>
                    <th>Action</th>
                </tr>
                <tr className='text-center'>
                    <td className='border-dark border-2'>{DataCustomer[0].no}</td>
                    <td className='border-dark border-2'>{DataCustomer[0].users}</td>
                    <td className='border-dark border-2'>{DataCustomer[0].bukti}</td>
                    <td className='border-dark border-2'>{DataCustomer[0].active}</td>
                    <td className='border-dark border-2'>{DataCustomer[0].statU}</td>
                    <td className='border-dark border-2 text-black'>{DataCustomer[0].statP}</td>
                    <td>
                        <InputGroup className="mx-auto">
                            <SplitButton
                            variant="outline-dark"
                            title="Status Payment"
                            id="segmented-button-dropdown-1"
                            >
                            <Dropdown.Item variant="bg-success">Approve</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item variant="outline-">Pending</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item variant="outline-">Cancel</Dropdown.Item>
                            </SplitButton>
                        </InputGroup>
                    </td>
                </tr>
                <tr className='text-center'>
                    <td className='border-dark border-2'>{DataCustomer[1].no}</td>
                    <td className='border-dark border-2'>{DataCustomer[1].users}</td>
                    <td className='border-dark border-2'>{DataCustomer[1].bukti}</td>
                    <td className='border-dark border-2'>{DataCustomer[1].active}</td>
                    <td className='border-dark border-2'>{DataCustomer[1].statU}</td>
                    <td className='border-dark border-2'>{DataCustomer[1].statP}</td>
                    <td>
                            <InputGroup className="mx-auto">
                                <SplitButton
                                variant="outline-dark"
                                title="Status Payment"
                                id="segmented-button-dropdown-1"
                                >
                                <Dropdown.Item variant="bg-success">Approve</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item variant="outline-">Pending</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item variant="outline-">Cancel</Dropdown.Item>
                                </SplitButton>
                            </InputGroup>
                    </td>
                </tr>
                <tr className='text-center'>
                    <td className='border-dark border-2'>{DataCustomer[2].no}</td>
                    <td className='border-dark border-2'>{DataCustomer[2].users}</td>
                    <td className='border-dark border-2'>{DataCustomer[2].bukti}</td>
                    <td className='border-dark border-2'>{DataCustomer[2].active}</td>
                    <td className='border-dark border-2'>{DataCustomer[2].statU}</td>
                    <td className='border-dark border-2'>{DataCustomer[2].statP}</td>
                    <td>
                            <InputGroup className="mx-auto">
                                <SplitButton
                                variant="outline-dark"
                                title="Status Payment"
                                id="segmented-button-dropdown-1"
                                >
                                <Dropdown.Item variant="bg-success">Approve</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item variant="outline-">Pending</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item variant="outline-">Cancel</Dropdown.Item>
                                </SplitButton>
                            </InputGroup>
                    </td>
                </tr>
                <tr className='text-center'>
                    <td className='border-dark border-2'>{DataCustomer[3].no}</td>
                    <td className='border-dark border-2'>{DataCustomer[3].users}</td>
                    <td className='border-dark border-2'>{DataCustomer[3].bukti}</td>
                    <td className='border-dark border-2'>{DataCustomer[3].active}</td>
                    <td className='border-dark border-2'>{DataCustomer[3].statU}</td>
                    <td className='border-dark border-2'>{DataCustomer[3].statP}</td>
                    <td>
                            <InputGroup className="mx-auto">
                                <SplitButton
                                variant="outline-dark"
                                title="Status Payment"
                                id="segmented-button-dropdown-1"
                                >
                                <Dropdown.Item variant="bg-success">Approve</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item variant="outline-">Pending</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item variant="outline-">Cancel</Dropdown.Item>
                                </SplitButton>
                            </InputGroup>
                    </td>
                </tr>
                    </table>
        </div>
    </div>
  )
}