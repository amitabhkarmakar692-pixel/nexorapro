function cleanDatabaseUrl(url) {
  try {
    const parts = url.split("@");
    if (parts.length > 1) {
      const authPart = parts[0];
      const lastColonIndex = authPart.lastIndexOf(":");
      if (lastColonIndex !== -1) {
        const protocolAndUser = authPart.substring(0, lastColonIndex);
        let password = authPart.substring(lastColonIndex + 1);
        if (password.startsWith("[") && password.endsWith("]")) {
          password = password.substring(1, password.length - 1);
          return `${protocolAndUser}:${password}@${parts.slice(1).join("@")}`;
        }
      }
    }
  } catch (err) {
    console.error(err);
  }
  return url;
}
console.log(cleanDatabaseUrl("postgresql://postgres:60660nexorabro%40@db.hbnlxzcmbkinzkitrlps.supabase.co:5432/postgres"));
