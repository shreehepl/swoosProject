import { Typography } from "@mui/material";
export const FormLabel = ({ label, mandatory }: any) => {
    return (
        <Typography sx={{ fontWeight: 400 }}>{label}<span style={{ color: 'red' }}>{mandatory && '*'}</span></Typography>
    )
}