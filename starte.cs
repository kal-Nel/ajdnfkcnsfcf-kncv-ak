public class Starte
{
    0 references
    public Starte(IHostingEnvironment env)
    {
        //Setup configuration sources.
        Configuration = new Configuration()
        .AddJsonFile("config.json")
        .AddEnvironmentVariables();
        env.Environmentname
    }
    public void ConfigureServices(IServiceCollection services)
    {

        var mono = Type.GetType("Mono.Runtime") != null;
        // Add EF services to the services container if  not using Mono
        // consider using  Azure SQL or non local store for xplat until EF7 has
        if (!mono)  
        {
            services.AddEntityFramework(Configuration)
            .AddInMemoryStore()
            .AddDbContext<ApplicationDbContext>();
        }