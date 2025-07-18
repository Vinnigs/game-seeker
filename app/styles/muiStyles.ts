export const boxStyle = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {
        xs: "95%",
        sm: "95%",
        md: "85%",
        lg: "60%"
    },
    bgcolor: '#1f1434',
    border: '1px solid #8D78E9',
    boxShadow: 24,
    borderRadius: 2,
    py: 4,
    px: {
        sm: 0,
        md: 0,
        lg: 4
    },
    color: 'white',
}

export const selectStyle = {
  position: 'relative',
  borderRadius: '3px',
  background: 'rgba(255, 255, 255, 0.04)',
  padding: '1px',
  
  '& .MuiOutlinedInput-root': {
    position: 'relative',
    background: 'rgba(255, 255, 255, 0.04)',
    borderRadius: '3px',
    zIndex: 1,
  },

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: '3px',
    padding: '1px',
    background: 'linear-gradient(150deg, rgba(141, 120, 233, 0.6), rgba(255, 255, 255, 0.6))',
    WebkitMask:
      'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
    zIndex: 0,
    pointerEvents: 'none',
  },

  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },

  '& .MuiSelect-icon': {
    top: '50%',
    transform: 'translateY(-50%)',
    right: 16,
    color: 'white',
  },

  color: 'white',
};

export const inputLabelStyle = { 
    color: "white",
    '&.Mui-focused': {
        color: 'white',
    },
}

export const textFieldStyle = {
  width: "100%",
  borderRadius: "3px",

  "& .MuiOutlinedInput-root": {
    position: "relative",
    borderRadius: "3px",
    background: "rgba(255, 255, 255, 0.04)",
    overflow: "hidden",

    "& fieldset": {
      border: "none",
    },

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: "3px",
      padding: "1px",
      background: "linear-gradient(150deg, rgba(141, 120, 233, 0.6), rgba(255, 255, 255, 0.6))",
      WebkitMask:
        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      WebkitMaskComposite: "xor",
      pointerEvents: "none",
      zIndex: 1,
    },

    "& input": {
      position: "relative",
      zIndex: 2,
      color: "white",
    },
  },

  "& label": {
    color: "white",
    zIndex: 2,
  },

  "& label.Mui-focused": {
    color: "white",
  },
};

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