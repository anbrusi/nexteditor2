<?php
class dispatcher {

    /**
     * This sets the default for $this->useMathjax
     */
    const USE_MATHJAX = false;

    /**
     * This sets the default for $this->useWiris
     */
    const USE_WIRIS = false;

    /**
     * Document root relative path of test documents
     */
    const TESTDOCUMENTS = './testdocuments/';

    /**
     * Document root relative path of configuration file, which is in json format
     * It stores the values for $this->useMathjax and $this->useWiris.
     */
    const CONFIGURATION_FILE = './testdocuments/.configuration.json';

    /**
     * Array elements are names of properties persisted by setting hidden POSTs for their values.
     * $this->setPesistentValues adds the content of these properties to HTML as hidden POSTs
     * $this->getPersistentValues sets these properties from the hidden POSTs if present.
     */
    const PERSITENT_VARS = ['currentView', 'currentDocument'];

    /**
     * If true mathjax is loaded in the header, else mathjax is not available
     * 
     * @var bool
     */
    private bool $useMathjax;

    /**
     * If false, WIRIS plugins are disabled when CKEditor is created
     * 
     * @var bool
     */
    private bool $useWiris;

    /**
     * Name of the current view
     * 
     * @var string
     */
    private $currentView = 'testdocumentView';
    /**
     * Name of the file holding the current document
     * 
     * @var string
     */
    private $currentDocument = 'newDocument';

    /**
     * Current document content
     * 
     * @var string
     */
    private $currentHtml = '';

    /**
     * A possible error message
     * 
     * @var string
     */
    private string $errmess = '';

    public function __construct()
    {
        error_reporting(E_ALL & ~E_WARNING);
        $this->useMathjax = self::USE_MATHJAX;
        $this->useWiris = self::USE_WIRIS;
        // Override the values, if a valid configuration is found
        if (!$this->getConfiguration()) {
            $this->errmess = 'No stored configuration available';
        }
    }

    /**
     * Overrides the configuration in $this->useMathjax and $this->useWiris, if a valid configuration file is found
     * 
     * @return bool 
     */
    private function getConfiguration():bool {
        $json = file_get_contents(self::CONFIGURATION_FILE);
        if ( $json ) {
            $configuration = json_decode($json, true);
            if ($configuration !== NULL && isset($configuration['useMathjax']) && isset($configuration['useWiris'])) {
                $this->useMathjax = $configuration['useMathjax'];
                $this->useWiris = $configuration['useWiris'];
                return true;
            }
        } else {
            return false;
        }
    }

    private function setConfiguration(bool $useMathjax, bool $useWiris):bool {
        $configuration = [ 'useMathjax' => $useMathjax, 'useWiris' => $useWiris ];
        $json = json_encode($configuration);
        if ($json === false) {
            return false;
        } else {
            $bytes = file_put_contents(self::CONFIGURATION_FILE, $json);
            if ($bytes === false) {
                return false;
            }
        }
        return true;
    }

    private function header():string {
        $html = '';
        $html .= '<head>';
        $html .= '<meta charset="UTF-8">';
        $html .= '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
        $html .= '<title>inexteditor2</title>';
        $html .= '<link rel="stylesheet" href="index.css" />';
        $html .= '<link rel="stylesheet" href="content-styles.css"/>';
        // Import the classic editor script for all pages. Instantiation is made in pages, that need it
        $html .= '<script src="./build/isCkeditor.js"></script>';
        $html .= '<script src="./node_modules/@ckeditor/ckeditor5-inspector/build/inspector.js"></script>';

        if ($this->useMathjax) {
            // Version 2 von mathjax mit cdn laden. Version 3 hat noch nicht alle Funktionen
            // $html .= '<script async src="https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js?config=TeX-AMS-MML_CHTML"></script>';

            // Version 3
            // $html .= '<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>';
            // $html .= '<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>';

            $html .= '<script type="text/javascript" id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>';
        }
        if ($this->useWiris) {
            // Wiris client rendering. Can coexist with mathjax version 3. Replaces matjax after a moment. Ugly effect
            $html .= '<script src="https://myeclipse/nexteditor2/wiris/integration/WIRISplugins.js?viewer=image"></script>';
        }

        $html .= '</head>';
        return $html;
    }
    private function body():string {
        $html = '';
        $html .= '<body>';
        $html .= '<h1>nexteditor2</h1>';
        $html .= '<div class="smallspacer"></div>';
        $html .= '<form action="index.php" method="POST" enctype="" name="ispencil5_2">';
        // Get properties transmitted from previous view
        $this->getPersistentValues();
        // Handle POST's of previous view
        $html .= $this->handle();
        $html .= '<div>Current view: '.$this->currentView.'</div>';
        $html .= '<div class="smallspacer"></div>';
        // Render the current view
        $html .= $this->render();
        // Store persistent properties for the benefit of the next view
        $html .= $this->setPersistentValues();
        $html .= '</form>';
        $html .= '</body>';
        // Atach the IsPencil rendering script globally
        $params = array('interpolation' => 'bezier');
        $html .= self::ispclRenderingScript($params);
        return $html;
    }
    /**
     * Retrieves all hidden values for variables in self::PERSISTENT_VARS
     * 
     * @return void 
     */
    private function getPersistentValues() {
        foreach (self::PERSITENT_VARS as $var) {
            if (isset($_POST[$var])) {
                $this->$var = $_POST[$var];
            }
        }
    }
    /**
     * Returns HTML with hidden values for all variables in self::PERSISTENT_VARS
     * 
     * @return string 
     */
    private function setPersistentValues():string {
        $html = '';
        foreach (self::PERSITENT_VARS as $var) {
            $html .= '<input type="hidden", name ="'.$var.'" value="'.$this->$var.'" />';
        }
        return $html;
    }
    public function dispatch() {
        $html = '';
        $html .= '<!DOCTYPE html>';
        $html .= '<html>';
        $html .= $this->header();
        $html .= $this->body();
        $html .= '</html>';
        echo $html;
    }

    /**
     * Returns the view for 'testdocumentView'. This is the initial view, allowing to load an existing document or create a new one
     * 
     * @return string 
     */
    private function testdocumentView():string {
        $html = '';
        $html .= '<fieldset>';
        $html .= '<legend>test documents</legend>';
        $content = scandir(self::TESTDOCUMENTS);
        if ($content !== false) {
            foreach ($content as $file) {
                if ($file != '.' && $file != '..' && $file != '' && $file[0] != '.') {
                    if ($file == $this->currentDocument) {
                        $checked = 'checked="checked"';
                    } else {
                        $checked = '';
                    }
                    $html .= '<input type="radio" name="testdocuments" value="'.$file.'" id="'.$file.'" '.$checked.'/>';
                    $html .= '<label for "'.$file.'">&nbsp;'.$file.'</label><br>';
                }
            }
        }
        $html .= '</fieldset>';
        $html .= '<div class="smallspacer"></div>';
        $html .= '<input type="submit" name="load" value="load" />';
        $html .= '<input type="submit" name="new" value="new document" />';
        $html .= '<input type="submit" name="view" value="view" />'; 
        $html .= '<input type="submit" name="textarea" value="show in textarea" />';
        $html .= '<input type="submit" name="delete" value="delete" />'; 
        $html .= '<input type="submit" name="configuration" value="configuration" />';
        return $html;
    }
    private function createEditorScript():string {
        $txt = '';

        /*
        $txt .= <<<'EOD'
        let iseditor;
        ClassicEditor
            .create( document.querySelector( '#editor' ), {
                mathTypeParameters: {
                    serviceProviderProperties: {
                        URI: 'https://myeclipse/nexteditor2/wiris/integration',
                        server: 'php'
                    }
                }
            } )
            .then( editor => {
                console.log('editor ready', editor); 
                CKEditorInspector.attach( editor );
                const wordCountPlugin = editor.plugins.get( 'WordCount' );
                const wordCountWrapper = document.getElementById( 'word-count' );
                wordCountWrapper.appendChild( wordCountPlugin.wordCountContainer );
            } )
            .catch( error => {
                console.error( error );
            });
        EOD;
        */

        if ($this->useWiris) {
            $config = <<<'EOD'
            {
                mathTypeParameters: {
                    serviceProviderProperties: {
                        URI: 'https://myeclipse/nexteditor2/wiris/integration',
                        server: 'php'
                    }
                }
            }
            EOD;
        } else {
            $config = <<<'EOD'
            { 
                removePlugins:['MathType','ChemType']
            }
            EOD;
        }
        $thenStmt = <<<'EOD'
        {
            console.log('editor ready', editor); 
            CKEditorInspector.attach( editor );
            const wordCountPlugin = editor.plugins.get( 'WordCount' );
            const wordCountWrapper = document.getElementById( 'word-count' );
            wordCountWrapper.appendChild( wordCountPlugin.wordCountContainer );
        }
        EOD;
        $txt = 'ClassicEditor.create( document.querySelector( \'#editor\'), '.$config.')'.
               '.then( editor => '.$thenStmt.' )'. 
               '.catch( error => { console.log( error ); });';
        return $txt;
    }
    /**
     * Returns the view 'editorView'. Displays the editor and the name of the current document, allowing to store it.
     * 
     * @return string 
     */
    private function editorView():string {
        $html = '';
        $html .= '<div>';
        $html .= 'Current document:&nbsp;&nbsp;';
        $html .= '<input type="text", name="docuname" value="'.$this->currentDocument.'" />';
        $html .= '</div>';
        $html .= '<div class="smallspacer"></div>';
        $content = str_replace('&','&amp;', $this->currentHtml);
        $html .= '<textarea id="editor" name="content">'.$content.'</textarea>';
        $html .= '<div class="smallspacer"></div>';
        $html .= '<div id="word-count"></div>';
        $html .= '<script>';
        $html .= $this->createEditorScript();
        $html .= '</script>';
        $html .= '<div class="smallspacer"></div>';
        $html .= '<input type="submit" name="escape" value="escape" />';
        $html .= '<input type="submit" name="store" value="store" />';
        return $html;
    }

    /**
     * Returns the view 'viewingWiew'
     * 
     * @return string 
     */
    private function viewingView():string {
        $html = '';
        $html .= '<div>';
        $html .= 'View of document:&nbsp;&nbsp;'.$this->currentDocument;
        $html .= '<div style="margin: 20px; padding: 10px; border: 1px solid blue;" class="ck-content">';
        $html .= $this->currentHtml;
        $html .= '</div>';
        $html .= '<div class="smallspacer"></div>';
        $html .= '<input type="submit" name="escape" value="escape" />';
        return $html;
    }

    private function textareaView():string {
        $html = '';
        $html .= '<div>';
        $html .= 'Textarea view of document:&nbsp;&nbsp;'.$this->currentDocument;
        $html .= '<div class="smallspacer"></div>';
        $html .= '<div>';
        $html .= '<textarea cols="80" rows=24>';
        $content = str_replace('&', '&amp;', $this->currentHtml);
        $html .= $content;
        $html .= '</textarea>';
        $html .= '</div>';
        $html .= '<div class="smallspacer"></div>';
        $html .= '<input type="submit" name="escape" value="escape" />';
        return $html;
    }

    private function configurationView():string {
        $html = '';
        $html .= '<div>';
        $html .= 'View of document:&nbsp;&nbsp;'.$this->currentDocument;
        $html .= '<div style="margin: 20px; padding: 10px; border: 1px solid blue;" class="ck-content">';
        $html .= 'Choose an appropriate configuration';
        $html .= '<div class="smallspacer"></div>';
        if ($this->useMathjax) {
            $checked = 'checked="checked"';
        } else {
            $checked = '';
        }
        $html .= '<input type="checkbox" id="useMathjax" name="useMathjax" value="useMathjax" '.$checked.' />';
        $html .= '<label for="useMathjax"> use Mathjax</label><br>';
        if ($this->useWiris) {
            $checked = 'checked="checked"';
        } else {
            $checked = '';
        }
        $html .= '<input type="checkbox" id="useWiris" name="useWiris" value="useWiris" '.$checked.' />';
        $html .= '<label for="useWiris"> use WIRIS</label><br>';
        $html .= '</div>';
        $html .= '<div class="smallspacer"></div>';
        $html .= '<input type="submit" name="store" value="store" />';
        $html .= '<input type="submit" name="escape" value="escape" />';
        return $html;
    }

    /**
     * Returns HTML for the view $this->currentView
     * 
     * @return string 
     */
    private function render():string {
        switch ($this->currentView) {
            case 'testdocumentView':
                return $this->testdocumentView();
            case 'editorView':
                return $this->editorView();
            case 'viewingView':
                return $this->viewingView();
            case 'textareaView':
                return $this->textareaView();
            case 'configurationView';
                return $this->configurationView();
            default:
                return 'missing view';
        }
    }

    /**
     * Handler responding to POST of testdocumentView. This view shows available documents
     * 
     * @return void 
     */
    private function handleTestdocument():void {
        if (isset($_POST['load']) && isset($_POST['testdocuments'])) {
            $this->currentHtml = file_get_contents(self::TESTDOCUMENTS.$_POST['testdocuments']);
            $this->currentDocument = $_POST['testdocuments'];
            $this->currentView = 'editorView';
        } elseif (isset($_POST['new'])) {
            $this->currentView = 'editorView';
        } elseif ( isset($_POST['view']) && isset($_POST['testdocuments']) ) {
            $this->currentHtml = file_get_contents(self::TESTDOCUMENTS.$_POST['testdocuments']);
            $this->currentDocument = $_POST['testdocuments'];
            $this->currentView = 'viewingView';
        } elseif ( isset($_POST['textarea']) && isset($_POST['testdocuments']) ) {
            $this->currentHtml = file_get_contents(self::TESTDOCUMENTS.$_POST['testdocuments']);
            $this->currentDocument = $_POST['testdocuments'];
            $this->currentView = 'textareaView';
        } elseif ( isset($_POST['delete'])) {
            $this->currentDocument = $_POST['testdocuments'];
            unlink(self::TESTDOCUMENTS.$_POST['testdocuments']);
        } elseif ( isset($_POST['configuration'])) {
            $this->currentView = 'configurationView';
        }
    }
    /**
     * Handler responding to POST of editorView
     * 
     * @return void 
     */
    private function handleEditor():void {
        if (isset($_POST['escape'])) {
            $this->currentView = 'testdocumentView';
        } elseif (isset($_POST['store'])) {
            file_put_contents(self::TESTDOCUMENTS.$_POST['docuname'], $_POST['content']);
            chmod(self::TESTDOCUMENTS.$_POST['docuname'], 0777);
            $this->currentView = 'testdocumentView';
        }
    }

    /**
     * Handler responding to POST of textareaView
     * 
     * @return void 
     */
    private function handleTextarea():void {
        if (isset($_POST['escape'])) {
            $this->currentView = 'testdocumentView';
        }
    }

    /**
     * Handler responding to POST of viewingView
     * 
     * @return void 
     */
    private function handleView() {
        if (isset($_POST['escape'])) {
            $this->currentView = 'testdocumentView';
        }
    }

    /**
     * Handler responding to POST's of configurationView
     * 
     * @return void 
     */
    private function handleConfiguration() {
        if (isset($_POST['store'])) {
            if (isset($_POST['useMathjax'])) {
                $this->useMathjax = true;
            } else {
                $this->useMathjax = false;
            }
            if (isset($_POST['useWiris'])) {
                $this->useWiris = true;
            } else {
                $this->useWiris = false;
            }
            if (!$this->setConfiguration($this->useMathjax, $this->useWiris)) {
                $this->errmess = 'Cannot store the configuration';
                $this->currentView = 'configurationView';
            } else {
                $this->currentView = 'testdocumentView';
            }
        } elseif (isset($_POST['escape'])) {
            $this->currentView = 'testdocumentView';
        }
    }

    private function handle() {
        switch ($this->currentView) {
            case 'testdocumentView':
                $this->handleTestdocument();
                break;
            case 'editorView':
                $this->handleEditor();
                break;
            case 'viewingView':
                $this->handleView();
                break;
            case 'textareaView':
                $this->handleTextarea();
                break;
            case 'configurationView':
                $this->handleConfiguration();
                break;
            default:
                echo 'missing handler';
                die;
        }
    }

    private static function ispclRenderingScript(array $params):string {
        $html = '';
        $jsonParams = json_encode($params);
        $html .= '<script type="module">';
        $html .= 'import {attachIsPencil} from "../ispencil5_2/ispencil/ispen/ispenengine.js";';
        $html .= 'attachIsPencil(\''.$jsonParams.'\');';
        $html .= '</script>';
        return $html;
    }
}
$dispatcher = new dispatcher();
$dispatcher->dispatch();
