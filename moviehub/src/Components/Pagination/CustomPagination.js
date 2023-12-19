import { createMuiTheme, createTheme, Pagination, ThemeProvider } from "@mui/material"

const customTheme = createTheme ({
    palette: {
        mode: "dark",
    }
});

const CustomPagination = ({setPage,numOfPages = 10 }) => {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0,0);
    };
    return (
    <div 
        style = { {
            width:"100%",
            display:"flex",
            justifyContent:"center",
            marginTop:10,
        }}>
        <ThemeProvider theme={customTheme}>
            <Pagination 
                count={numOfPages} 
                onChange= {(e) => handlePageChange(e.target.textContent)}
            />
        </ThemeProvider>
    </div>
    );
};

export default CustomPagination;