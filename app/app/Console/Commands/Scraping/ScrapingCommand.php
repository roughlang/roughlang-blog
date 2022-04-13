<?php

namespace App\Console\Commands\Scraping;


use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use HeadlessChromium\BrowserFactory;

/**
 * Scraping web site.
 * 
 * 
 * 
 */
class ScrapingCommand extends Command
{
  /**
   * The name and signature of the console command.
   *
   * @var string
   */
  protected $signature = 'scraping:run {arguments?}';

  /**
   * The console command description.
   *
   * @var string
   */
  protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
      parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
      // $response = Http::get('https://twitter.com/freakscafe/');
      // var_dump($response);
      
      if ($this->argument('arguments') == "guzzle") {
        // dd($this->argument('arguments'));
        dd($this->guzzle());

      } elseif ($this->argument('arguments') == "chrome") {
        dd($this->chrome());
      }
      echo "This is sample commad.\n";

      return Command::SUCCESS;
    }

    public function guzzle()
    {
      return "guzzle";
    }

    public function chrome()
    {
      $browserFactory = new BrowserFactory();
      $browser = $browserFactory->createBrowser();
      $page = $browser->createPage();
      $page->navigate('http://example.com')->waitForNavigation();
      return "chrome";
    }
}
