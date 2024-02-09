import { Box, LinearProgress, LinearProgressProps } from "@mui/material"

export function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    return <>
      <Box sx={{ display: 'flex', alignItems: 'center', columnGap: '1rem' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <p><strong>{`${ Math.round(props.value) }`}%</strong></p>
        </Box>
      </Box>
    </>;
}