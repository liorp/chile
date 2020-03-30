import React, {Fragment} from "react";

const ProductsTable = (chileDialog, history) => ({
    title: "Products",
    columns: [
        {title: "Adı", field: "name"},
        {
            title: "Soyadı",
            field: "surname"
        },
        {
            title: "Doğum Yılı",
            field: "birthYear",
            cellStyle: {
                textAlign: "center"
            },
            headerStyle: {
                textAlign: "center"
            }
        },
        {
            title: "Doğum Yeri",
            field: "birthCity",
            lookup: {34: "İstanbul", 63: "Şanlıurfa"}
        }
    ],
    actions: [
        {
            icon: 'add',
            tooltip: 'Create Invoice',
            onClick: (event, rowData) => {
                // Do save operation
            }
        },
        {
            icon: 'visibility',
            tooltip: 'View Detail',
            onClick: (event, rowData) => {
                // Do save operation
                chileDialog({
                    title: 'Header of modal',
                    content: `I have access to the rowData. This includes ${JSON.stringify(rowData)}`,
                    children: (
                        <Fragment>
                            <p>I also support custom body elements</p>
                        </Fragment>
                    ),
                    actions: {
                        cancel: {
                            text: 'Cancel'
                        },
                        confirm: {
                            text: 'OK'
                        },
                    }
                }).then(() => {
                    console.log('Dialog ran');
                }).catch(() => {
                    console.log('Dialog cancel');
                });
            }
        },
        {
            icon: 'info',
            tooltip: 'View Detail',
            onClick: (event, rowData) => {
                // Do save operation
                history.push(`/product/${rowData.id}`);
            }
        },
        {
            icon: 'save',
            tooltip: 'Export to XML',
            onClick: (event, rowData) => {
                // Do save operation
            },
            isFreeAction: true
        },
        {
            icon: 'add',
            tooltip: 'Create',
            onClick: (event, rowData) => {
                // Do save operation
            },
            isFreeAction: true
        }
    ]
});

export default ProductsTable;
