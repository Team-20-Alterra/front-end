export const statusBadge = (props) => {
    switch (props) {
        case 'Berhasil':
            return (
                <div className='badge-berhasil w-auto'>
                    {props}
                </div>
            );
        case 'Menunggu Konfirmasi':
            return (
                <div className='badge-tunggu w-auto'>
                    {props}
                </div>
            );
        case 'Gagal':
            return (
                <div className='badge-gagal w-auto'>
                    {props}
                </div>
            );
        case 'Dalam Proses':
            return (
                <div className='badge-proses w-auto'>
                    {props}
                </div>
            );
        default:
            return null;
    }
}