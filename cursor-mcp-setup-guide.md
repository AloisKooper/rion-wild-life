# Setting Up MCP Servers in Cursor IDE: Lessons Learned

This document summarizes our findings on setting up Model Context Protocol (MCP) servers in Cursor IDE, based on our successful configuration of the Figma MCP server.

## What is MCP?

Model Context Protocol (MCP) allows AI assistants like those in Cursor to access external tools and data sources. MCP servers act as bridges between Cursor and services like Figma, providing structured data access to the AI.

## Successfully Configuring Figma MCP Server

After encountering several issues, these are the steps that successfully connected Cursor to the Figma MCP server:

### 1. Server Setup

```bash
# Start the server in HTTP/SSE mode (not stdio mode)
pnpx figma-developer-mcp@latest --figma-api-key=YOUR_FIGMA_API_KEY
```

Key points:
- Use the `@latest` tag to ensure you have the most recent version
- Do NOT use the `--stdio` flag for Cursor connections
- Server will output that it's listening on port 3333 (default)

### 2. Cursor Configuration

1. Go to Cursor Settings > Features > MCP Servers
2. Click "+ Add new MCP server"
3. Configure as follows:
   - **Name**: Figma MCP (or any name)
   - **Type**: sse
   - **URL**: `http://127.0.0.1:3333/sse` (use IP address, not localhost)
4. Click Save
5. Verify the server shows a green check mark (connected)

### 3. Using the MCP Tools

1. Ensure Cursor is in "Agent" mode (not just Assistant mode)
2. Paste a Figma link and ask Cursor to work with it
3. Cursor will use the get_file and get_node tools to access the Figma design data

## Common Issues & Solutions

1. **"Client closed" status**
   - Solution: Use SSE transport mode instead of command/stdio mode

2. **Connection refused errors**
   - Solution: Use `127.0.0.1` instead of `localhost` in the URL
   - Ensure no firewall is blocking the connection

3. **No tools showing up**
   - Solution: Click the refresh button next to the server
   - Ensure server is actually running and outputting "Available tools"

4. **SSE error: TypeError: fetch failed**
   - Solution: Confirm server is running in HTTP mode, not stdio mode
   - Check if port 3333 is available (not used by another application)

5. **MCP tools not being used by AI**
   - Solution: Ensure you're in Agent mode, not Assistant mode
   - Explicitly mention/link to the Figma file

## General Best Practices for MCP Servers

1. **Transport Type**:
   - For Cursor, use SSE transport when possible
   - Command/stdio mode may be less reliable for some servers

2. **Networking**:
   - Always use IP address (`127.0.0.1`) instead of `localhost`
   - Check if the port is open and not blocked by firewalls

3. **Startup Management**:
   - Create a batch file or script to easily start your MCP servers
   - Remember that servers don't auto-start with Cursor

4. **Version Control**:
   - Always specify `@latest` or a specific version number
   - MCP is evolving rapidly; newer versions often fix bugs

5. **Debugging**:
   - Use the MCP Inspector tool to test servers independently from Cursor
   - Monitor server console output for connection information

## Conclusion

While setting up MCP servers in Cursor can be challenging, following these guidelines should help avoid many common pitfalls. The key insight from our experience is that using SSE transport with the proper IP address format works more reliably than command/stdio mode, even when the documentation suggests otherwise. 