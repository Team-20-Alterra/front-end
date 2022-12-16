export const statusBadge = (props) => {
    switch (props) {
        case 'Berhasil':
            return (
                <div className='badge-berhasil'>
                    {props}
                </div>
            );
        case 'Menunggu Konfirmasi':
            return (
                <div className='badge-tunggu'>
                    {props}
                </div>
            );
        case 'Gagal':
            return (
                <div className='badge-gagal'>
                    {props}
                </div>
            );
        case 'Dalam Proses':
            return (
                <div className='badge-proses'>
                    {props}
                </div>
            );
        default:
            return null;
    }
}