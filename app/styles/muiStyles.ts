export const boxStyle = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60%",
    bgcolor: '#1f1434',
    border: '1px solid #8D78E9',
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
    color: 'white',
}

export const selectStyle = {
    color: 'white',
    '.MuiOutlinedInput-notchedOutline': {
        borderColor: 'white'
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white'
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white'
    },
    '& .MuiSelect-icon': {
        top: '50%',
        transform: 'translateY(-50%)',
        right: 16
    },
    
}

export const inputLabelStyle = { 
    color: "white",
    '&.Mui-focused': {
        color: 'white',
    },
}

export const textFieldStyle = {
    width: "100%",
    input: {
        color: "white",
    },
    label: {
        color: "white",
    },
    "& label.Mui-focused": {
        color: "white",
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "white",
        },
        "&:hover fieldset": {
            borderColor: "white",
        },
        "&.Mui-focused fieldset": {
            borderColor: "white",
        },
    },
}

export const breadcrumbMuiStyles = {
    color: 'white',
    fontFamily: 'Play',
    '& .MuiBreadcrumbs-li': {
        opacity: 0.5,
    },
    '& .MuiBreadcrumbs-li:last-child': {
        opacity: 1,
    },
    '& .MuiBreadcrumbs-separator': {
        opacity: 0.5,
    },
    '& p' : {
        fontSize: 16
    },
    '& .MuiBreadcrumbs-li:not(:last-child):hover': {
        opacity: 1,
        cursor: 'pointer',
    },
}