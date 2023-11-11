
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { AlignContentRight } from './AlignContentRight';


// const dataRows=[
//     {name:"N1",country:{name:"C1"},company:"COMP1",representative:{name:"R1"}},
//     {name:"N2",country:{name:"C8"},company:"COMP1",representative:{name:"R2"}},
//     {name:"N3",country:{name:"C7"},company:"COMP101",representative:{name:"R3"}},
//     {name:"N4",country:{name:"C6"},company:"COMP1",representative:{name:"R4"}},
//     {name:"N5",country:{name:"C5"},company:"COMP1",representative:{name:"R5"}},
//     {name:"N6",country:{name:"C4"},company:"COMP1202",representative:{name:"R6"}},
//     {name:"N7",country:{name:"C3"},company:"COMP1",representative:{name:"R7"}},
//     {name:"N8",country:{name:"C2"},company:"COMP1",representative:{name:"R8"}},
//     {name:"N9",country:{name:"C1"},company:"COMP1",representative:{name:"R9"}}

// ]

// const dataRowsHeader=[
//     {field:"name",header:"Name"},
//     {field:"country.name",header:"Country"},
//     {field:"company",header:"Company"},
//     {field:"representative.name",header:"Representative"}
// ]

export default function DataTables({dataRowsHeader,dataRows}) {
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    const onGlobalFilterChange = (event) => {
        const value = event.target.value;
        let _filters = { ...filters };
        _filters['global'].value = value;
        setFilters(_filters);
    };

    const headers = ({tableHeading}) => {
        const value = filters['global'] ? filters['global'].value : '';

        return (
            <>
            <h1>{tableHeading}</h1>
            <AlignContentRight>
                <InputText className="shadow-xl p-3 focus-within:border-b-4 " type="search" value={value || ''} onChange={(e) => onGlobalFilterChange(e)} placeholder="Search" />
            </AlignContentRight>
            </>
        );
    };

    return (
        <div className=" shadow-xl">
            
            <DataTable
                    
                    value={dataRows} paginator rows={5} header={headers} filters={filters} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>

                    {dataRowsHeader.map((hd,index)=>(<Column key={index } field={hd.field} header={hd.header}  sortable  style={{ width: '25%' }}></Column>))}
                
            </DataTable>
        
        </div>
    );
}
        