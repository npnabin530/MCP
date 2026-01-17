import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// MCP SSE endpoint
app.get("/sse", (req, res) => {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    res.write(`data: MCP Server Connected\n\n`);
});

// Example tool endpoint
app.post("/tool", (req, res) => {
    const { input } = req.body;
    res.json({
        result: `Diva MCP received: ${input}`
    });
});

app.listen(3000, () => {
    console.log("✅ MCP Server running on http://localhost:3000");
});
