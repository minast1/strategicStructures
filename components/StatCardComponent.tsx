import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

type appProps = {
  name: string;
  level: number;
};
const StatCardComponent = ({ name, level }: appProps) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: 150,
        height: 70,
        //border: "1px solid black",
        backgroundColor: "#e0e0e0",
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          align="center"
          sx={{ fontFamily: "kalam-Bold", textTransform: "capitalize" }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          align="center"
          sx={{ fontFamily: "kalam-Bold" }}
        >
          {level}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatCardComponent;
