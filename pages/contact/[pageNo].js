import {useRouter} from 'next/router';

function pageNo() {
    const router=useRouter()
    const pageNumber=router.query.pageNo;
    return (
        <div>
            contact {pageNumber}
        </div>
    )
}

export default pageNo
