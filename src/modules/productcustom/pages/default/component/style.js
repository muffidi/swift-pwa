import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    container: {
        // {padding: '10px 0 0 0' , display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(6, 1fr)'
        padding: '10px 0 0 0',
        display: 'grid',
        gap: '20px',
        gridTemplateColumns: 'repeat(4, 1fr)'
    },
    productContainer: {
        padding: '16px', 
        border: '1px dashed #dddddd', 
        backgroundColor: 'whitesmoke', 
        borderRadius: '8px', 
        boxShadow: '5px 5px 2px #aaaaaa', 
        textDecoration: 'none', 
        color: 'black', 
        maxWidth: '800px', 
        margin: '0 auto'
    },
    title: {
        textAlign: 'center', 
        textTransform: 'capitalize', 
        fontWeight: 'bold'
    },
}));

export default useStyles;
