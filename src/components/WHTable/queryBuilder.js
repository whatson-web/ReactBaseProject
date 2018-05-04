const QueryBuilder = (state) => {


    if(!state) return {};

    const {pageSize, page, sorted, filtered} = state; 

    const params = {};

    if(pageSize) params.itemsPerPage = pageSize;
    if(page) params.page = page+1 ;

    /**
     * Order
     */
    params.order = {}; 

    if(sorted) {

        sorted.map((el, index) => {
            params.order[el.id] = (el.desc) ? 'desc' : 'asc';
        }); 

    }


    /**
     * Filter
     */
    if(filtered){
        filtered.map((el, index) => {
            switch (el.id) {
                case 'statusName' :
                    params['status'] = el.value;
                    break;
                default:
                    params[el.id] = el.value;
                    break;
            }
        });
    }    
    
    return params; 

}

export default QueryBuilder; 